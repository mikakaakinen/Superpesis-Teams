import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';
import Header from './Header.js';
import Footer from './Footer.js';
import App from './App';
import { Global, css } from '@emotion/core';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <>
        <Global
            styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Merriweather', serif;
                    -webkit-font-smoothing: antiliased;
                    -moz-osx-font-smoothing: grayscale;
                    min-height: 100vh;
                }

                code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas,
                        'Courier New', monospace;
                }

                h1 {
                    font-size: 2rem;
                    margin-top: 0.67rem;
                    margin-bottom: 0.67rem;
                    margin-left: 0;
                    margin-right: 0;
                    font-weight: bold;
                    font-family: 'Comfortaa', cursive;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-top: 0.77rem;
                    margin-bottom: 0.77rem;
                    margin-left: 0;
                    margin-right: 0;
                    font-weight: bold;
                }

                h3 {
                    font-size: 1.17rem;
                    margin-top: 0.87rem;
                    margin-bottom: 0.87rem;
                    margin-left: 0;
                    margin-right: 0;
                    font-weight: bold;
                }

                p {
                    font-size: 1rem;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    margin-left: 0;
                    margin-right: 0;
                }
                img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                }
            `}
        />
        <ApolloProvider client={client}>
            <Header />
            <App />
            <Footer />
        </ApolloProvider>
    </>,
    document.getElementById('root')
);
