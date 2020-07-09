import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head';
import axios from 'axios';

export default function Poems() {
    const [data, setData] = useState([])
    // fetch the published poems
    useEffect(() => {
        axios({
            url: "http://localhost:3000/admin/api",
            method: 'post',
            data: {
                query: `
                    query {
                        allPosts(where: {contentType: Poem, published: true}){
                            id,
                            title,
                            contentType,
                            description,
                            thumbnail{
                                publicUrl
                            },
                            mainImage{
                                publicUrl
                            },
                            published,
                            views
                        }
                    }
                `
            }
        }).then(res => setData(res.data.data.allPosts))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Head>
                <title>Mơ Tooi</title>
                <meta property="og:title" content="Mơ Tooi" key="title" />
            </Head>
            <motion.div
                exit={{ x: "100%" }}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: "#1f535b", height: "100vh", padding: "3em" }}
            >
                {data.map(post => <h1>{post.title}</h1>)}
            </motion.div>
        </>

    )
}