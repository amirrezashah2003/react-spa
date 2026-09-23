import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'react-loading-skeleton/dist/skeleton.css';
// ایمپورت کردن بوت استرپ
// زمانی که به  جای بوت استرپ از ریکت بوت استرپ استفاده میکنی دیگه نیازی نیست که فایل جی اسی بوت استرپ رو هم ایمپورت کنی
import "bootstrap/dist/css/bootstrap.rtl.min.css"
// اگر پروژه ما جهتش راست به چپ بود باید از تم پروایدر استفاده کنیم و پراپ دایرکشن با مقدار آر تی ال بدیم
import ThemeProvider from "react-bootstrap/ThemeProvider"

import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import './index.css'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider dir="rtl">
      <App /> 
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
