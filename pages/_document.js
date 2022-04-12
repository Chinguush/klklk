import Document , {Html, Head, Main, NextScript} from  'next/document'

class MyDocument extends Document {
    render()
 {
    return (
        <Html lang="en">
            <Head>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
 }
}

export default MyDocument;