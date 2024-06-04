import ReactDOM from 'react-dom/client'
import { PREFIX_CRM } from '@/constants/index'
import App from '@/App'
import '@/index.css'
import '@/i18n'
import '@/configs'

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!, {
  identifierPrefix: PREFIX_CRM,
  onRecoverableError(error, errorInfo) {
    console.log(error, errorInfo)
  }
})
root.render(<App />)