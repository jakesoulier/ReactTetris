import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
            //draw background
        context.fillStyle = '#FF0000'
        context.fillRect(0, 0, 10, canvas.width)
    }, [])

    return <canvas ref = { canvasRef } {...props }
    />
}

export default Canvas