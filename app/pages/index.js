import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function Index() {
    const [activeMenu, setMenu] = useState('home')
    return (
        <Menu pointing secondary vertical>
            <Menu.Item
                name='home'
                active={activeMenu === 'home'}
                onClick={() => setMenu('home')}
            />
            <Menu.Item
                name='messages'
                active={activeMenu === 'messages'}
                onClick={() => setMenu('messages')}
            />
            <Menu.Item
                name='friends'
                active={activeMenu === 'friends'}
                onClick={() => setMenu('friends')}
            />
        </Menu>
    )
}
export default Index;
