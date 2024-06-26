import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Страница не найдена</p>
            <Link to="/" className="text-blue-500 underline">
                Вернуться на главную
            </Link>
        </div>
    )
}

export default PageNotFound