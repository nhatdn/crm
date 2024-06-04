import React, { StrictMode, Suspense, useEffect, useInsertionEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { ConfigProvider } from 'antd';
import es_ES from 'antd/es/locale/es_ES';
import vi_VN from 'antd/es/locale/vi_VN';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import { ErrorBoundary } from '@/hocs'
import i18n from '@/i18n'
import '@/styles/index.scss'
import '@/App.css'
import RenderRouter from '@/routes'
const App: React.FC = () => {
  useInsertionEffect(() => {
    if (window == undefined) {
      console.log = () => { }
      console.info = () => { }
      console.warn = () => { }
      console.error = () => { }
      console.table = () => { }
      console.trace = () => { }
    }
  }, []);

  useEffect(() => {
    document.querySelector("body > .loading")?.remove();
  }, [])

  const client = new QueryClient();
  return (
    <StrictMode>
      <ErrorBoundary fallbackError={'Have some error...'}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<span />}>
            <QueryClientProvider client={client}>
            <BrowserRouter>
              <ConfigProvider theme={{ token: { colorPrimary: '#00B125' } }} locale={i18n.language == 'vi' ? vi_VN : es_ES}>
                <RenderRouter />
              </ConfigProvider>
            </BrowserRouter>
            </QueryClientProvider>
          </Suspense>
        </I18nextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

export default App
