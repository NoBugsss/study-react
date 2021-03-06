import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'example',
            path: '/example',
            exact: true,
            component: Loadable({
                loader: () => import('@/views/example/example.jsx'),
                loading: () => <div />
            })
        }
    ]
}