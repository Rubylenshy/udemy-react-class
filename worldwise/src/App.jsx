import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from './pages/AppLayout';
import Login from "./pages/Login";
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from "./components/City"
import Form from "./components/Form"


function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = "https://localhost:9000"

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)

                // const res = await fetch(`${BASE_URL}/cities`)
                const res = await fetch('/data/cities.json')
                const data = await res.json();
                
                setCities(Array.isArray(data.cities) ? data.cities : [])
                
            } catch {
                alert('There was a problem loading cities')
            } finally {
                setIsLoading(false)
            }
        }

        fetchCities();
    }, [])

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="app" element={<AppLayout />} >
                    <Route index element={<Navigate replace to="cities" />} />
                    <Route path="cities" element={<CityList isLoading={isLoading} cities={cities} />} />
                    <Route path="cities/:id" element={<City />} />
                    <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
                    <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
