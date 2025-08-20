import React from 'react'

const GradientBg = () => {
    return (
        <div>
            <div className="absolute -top-20 -left-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-fuchsia-500 blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-screen"></div>
            <div className="absolute -top-20 -left-20 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-fuchsia-500 blur-xl sm:blur-2xl lg:blur-3xl mix-blend-screen"></div>
            <div className="absolute top-10 right-0 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-yellow-400 blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-screen"></div>
            <div className="absolute top-10 right-0 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full bg-yellow-400 blur-xl sm:blur-2xl lg:blur-3xl mix-blend-screen"></div>
            <div className="absolute bottom-10 right-0 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-teal-500 blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-screen"></div>
            <div className="absolute bottom-10 right-0 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full bg-teal-500 blur-xl sm:blur-2xl lg:blur-3xl mix-blend-screen"></div>
            <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-red-500 blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-screen"></div>
            <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-red-500 blur-xl sm:blur-2xl lg:blur-3xl mix-blend-screen"></div>
            <div className="absolute top-[50%] translate-y-[-50%] -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full bg-blue-500 blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-screen"></div>
            <div className="absolute top-[50%] translate-y-[-50%] -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full bg-blue-500 blur-[30px] sm:blur-[40px] lg:blur-[50px] mix-blend-screen"></div>
            <div className="absolute bottom-[-100px] sm:bottom-[-150px] lg:bottom-[-200px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full bg-purple-600/30 blur-xl sm:blur-2xl lg:blur-3xl mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-pink-900/50"></div>
        </div>

    )
}

export default GradientBg
