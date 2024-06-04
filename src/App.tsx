import React, { StrictMode, Suspense, useEffect, useInsertionEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { ConfigProvider } from 'antd';
import { GoogleOAuthProvider } from '@react-oauth/google';
import vi_VN from 'antd/es/locale/vi_VN';
import fr_FR from 'antd/es/locale/fr_FR';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ErrorBoundary } from '@/hocs'
import { theme } from '@/constants';
import i18n from '@/i18n'
import '@/App.css'
import RenderRouter from '@/routes'
import configs from './configs';

const App: React.FC = () => {

  useInsertionEffect(() => {
    // production need to check
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
    document.querySelector("body > .loading-container")?.remove();
  }, [])

  const client = new QueryClient();

  return (
    <StrictMode>
      <ErrorBoundary fallbackError={'Have some error...'}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<span />}>
              <QueryClientProvider client={client}>
                <BrowserRouter>
                  <GoogleOAuthProvider clientId={configs.GOOGLE_CLIEND_ID}>
                    <ConfigProvider theme={theme} locale={i18n.language == 'vi' ? vi_VN : fr_FR}>
                      <RenderRouter />
                    </ConfigProvider>
                  </GoogleOAuthProvider>
                </BrowserRouter>
              </QueryClientProvider>
          </Suspense>
        </I18nextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

export default App;
