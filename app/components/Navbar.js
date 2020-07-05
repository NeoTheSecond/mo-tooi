import React, { useState } from 'react'
import { Menu, Image, Container } from 'semantic-ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css"
import { motion } from 'framer-motion';

const fadeInLeft = {
    initial: {
        x: 60,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            // ease: [0.6, -0.05, 0.01, 0.99],
            delay: 4
        }
    }
}

function Navbar() {
    const router = useRouter()
    const [activeMenu, setMenu] = useState(router.pathname)

    return (
        <Menu fluid secondary text vertical style={{ height: "100%" }}>
            <div style={{ paddingLeft: "2em", paddingTop: "8em", paddingBottom: "8em", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <Link href="/">
                        <a><img className={styles.logo} src='/images/mo-tooi-logo.png' /></a>
                    </Link>
                    <Menu.Item>
                        <p className={styles.subtitleText}>Là <b>một</b> trang web<br /> của <b>những</b> kẻ mộng mơ</p>
                    </Menu.Item>
                    <Link href="/poems">
                        <Menu.Item
                            className={styles.link}
                            name='Poems'
                            active={"/poems" === router.pathname}
                            onClick={() => setMenu('/poems')}
                            style={{ color: "/poems" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                        />
                    </Link>
                    <Link href="/writings">
                        <Menu.Item
                            className={styles.link}
                            name='Writings'
                            active={"/writings" === router.pathname}
                            onClick={() => setMenu('/writings')}
                            style={{ color: "/writings" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                        />
                    </Link>

                    <Link href="/about">
                        <Menu.Item
                            className={styles.link}
                            name='About'
                            active={"/about" === router.pathname}
                            onClick={() => setMenu('/about')}
                            style={{ color: "/about" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                        />
                    </Link>
                </div>
                <motion.div className={styles.warning}
                    variants={fadeInLeft}
                    initial="initial"
                    animate="animate"
                >
                    <img src="/icons/warning-icon.png" style={{ height: "50px", width: "auto" }} />
                    <div className={styles.breaker}></div>
                    <p>
                        Đọc quá 180 phút<br /> một ngày ảnh hưởng <br /> xấu đến sức khỏe
                    </p>
                </motion.div>
            </div>
        </Menu>
    )
}
export default Navbar;