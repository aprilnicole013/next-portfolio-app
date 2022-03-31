import '../styles/global.css'

export default function App({ Component, pageProps }){
    return <Component {...pageProps} />
}
//can only be imported in the _app.js file