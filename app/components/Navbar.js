import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'

function Navbar() {
    const [activeMenu, setMenu] = useState(null)
    return (
        <Menu pointing secondary vertical>
            <Link href="/poems">
                <Menu.Item
                    name='Poems'
                    active={activeMenu === 'Poems'}
                    onClick={() => setMenu('Poems')}
                />
            </Link>
            <Link href="/writings">
                <Menu.Item
                    name='Writings'
                    active={activeMenu === 'Writings'}
                    onClick={() => setMenu('Writings')}
                />
            </Link>

            <Link href="/about">
                <Menu.Item
                    name='About'
                    active={activeMenu === 'About'}
                    onClick={() => setMenu('About')}
                />
            </Link>

        </Menu>
    )
}
export default Navbar;