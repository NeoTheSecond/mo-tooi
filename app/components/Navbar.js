import React, { useState } from 'react'
import { Menu, Image, Container } from 'semantic-ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css"



function Navbar() {
    const router = useRouter()
    const [activeMenu, setMenu] = useState(router.pathname)

    return (
        <Menu fluid secondary text vertical   >
            <Menu.Item>
                <Link href="/">
                    <img src='/images/mo-tooi-logo.png' />
                </Link>
            </Menu.Item>
            <Menu.Item>
                <p className={styles.subtitleText}>Là <b>một</b> trang web của <b>những</b> kẻ mộng mơ</p>
            </Menu.Item>
            <Link href="/poems">
                <Menu.Item
                    name='Poems'
                    active={"/poems" === router.pathname}
                    onClick={() => setMenu('/poems')}
                    style={{ color: "/poems" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                />
            </Link>
            <Link href="/writings">
                <Menu.Item
                    name='Writings'
                    active={"/writings" === router.pathname}
                    onClick={() => setMenu('/writings')}
                    style={{ color: "/writings" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                />
            </Link>

            <Link href="/about">
                <Menu.Item
                    name='About'
                    active={"/about" === router.pathname}
                    onClick={() => setMenu('/about')}
                    style={{ color: "/about" === router.pathname ? "#ca5e42" : "#ebae8d" }}
                />
            </Link>
        </Menu>
    )
}
export default Navbar;