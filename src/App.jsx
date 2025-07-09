// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CoursesAndPrice from "./pages/coursesAndPrice/CursesAndPrice";
// import Registration from "./pages/boshSahifa/registration/Registration";
// import RoyxatdanOtish from "./pages/clickmodal/RoyxatdanOtish";
// import Loading from "./Loading"
// import Header from "./pages/boshSahifa/header/Header";
// import Footer from "./pages/boshSahifa/footer/Footer";
// import "./App.css";

// const Kurslar = lazy(() => import("./pages/coursesAndPrice/Kurslar"));
// const ProgrammingCourse = lazy(() => import("./pages/programmingCourses/ProgrammingCourse"));
// const LichTeacher = lazy(() => import("./pages/lichTeachers/LichTeacher"));
// const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
// const BoshSahifa = lazy(() => import("./pages/boshSahifa/BoshSahifa"));
// const OnlineCourses = lazy(() => import("./pages/onlineCourses/OnlineCourses"));
// const NotFound = lazy(() => import("./pages/notFound/NotFound"));

// const App = () => (
//   <>
//     <Header />

//     <Suspense fallback={<Loading />}>
//       {" "}
//       <Routes>
//         <Route path="/" element={<BoshSahifa />} />
//         <Route path="/ustozlar" element={<Teachers />} />
//         <Route path="kurslar" element={<Kurslar />} />
//         <Route path="/online-kurslar" element={<OnlineCourses />} />
//         {/* 404 sahifasi */}
//         <Route path="*" element={<NotFound />} />
//         <Route path="courseAndPrice" element={<CoursesAndPrice />} />
//         <Route path="ustozlar/ustoz/:id" element={<LichTeacher />} />
//         <Route path="kurslar/kurs/:id" element={<ProgrammingCourse />} />
//         <Route path="registration" element={<Registration />} />
//         <Route path="RoyxatdanOtish" element={<RoyxatdanOtish />} />
//       </Routes>
//     </Suspense>

//     <Footer />
//   </>
// );

// export default App;
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loading from './Loading'
import Footer from './pages/boshSahifa/footer/Footer'
import Header from './pages/boshSahifa/header/Header'
import Registration from './pages/boshSahifa/registration/Registration'
import RoyxatdanOtish from './pages/clickmodal/RoyxatdanOtish'
import CoursesAndPrice from './pages/coursesAndPrice/CursesAndPrice'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

import 'antd/dist/reset.css'

// Lazy load sahifalar
const Kurslar = lazy(() => import('./pages/coursesAndPrice/Kurslar'))
const ProgrammingCourse = lazy(() =>
	import('./pages/programmingCourses/ProgrammingCourse')
)
const LichTeacher = lazy(() => import('./pages/lichTeachers/LichTeacher'))
const Teachers = lazy(() => import('./pages/Teachers/Teachers'))
const BoshSahifa = lazy(() => import('./pages/boshSahifa/BoshSahifa'))
const OnlineCourses = lazy(() => import('./pages/onlineCourses/OnlineCourses'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))

const App = () => {
	return (
		<>
			<Header />

			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<BoshSahifa />} />
					<Route path='/ustozlar' element={<Teachers />} />
					<Route path='/kurslar' element={<Kurslar />} />
					<Route path='/online-kurslar' element={<OnlineCourses />} />
					<Route path='/courseAndPrice' element={<CoursesAndPrice />} />
					<Route path='/ustozlar/ustoz/:id' element={<LichTeacher />} />
					<Route path='/kurslar/kurs/:id' element={<ProgrammingCourse />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/RoyxatdanOtish' element={<RoyxatdanOtish />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>

			<Footer />

			{/* Global ToastContainer */}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme='light'
			/>
		</>
	)
}

export default App
