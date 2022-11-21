import Map from './components/Map'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'https://api.github.com/repos/tannerlinsley/react-query'
                )

                setData(result.data)
            } catch (error) {
                setError(error.message)
            }

            setLoading(false)
        }

        fetchData()
    }, [])
    return (
        <div className='container'>
            {loading ? (
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress />
                </div>
            ) : error ? (
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Alert severity='error' className='w-100'>
                        <AlertTitle>Error</AlertTitle>
                        Error fetching data from the server. Error message:{' '}
                        <strong>{error}</strong>
                    </Alert>
                </div>
            ) : (
                <Map data={data} />
            )}
        </div>
    )
}

export default App
