import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls, TransformControls } from '@react-three/drei'

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export function Plane({normal, displacement}) {
    const ref = useRef();
    useFrame((state, delta) => (console.log(ref)));
    return (
        <>
            <planeHelper ref={ref} args={[new THREE.Plane(normal, displacement), 10, 0x00ff00]} />
        </>
    )
}

export function Arrow({position, direction, length, color}) {
    const ref = useRef();
    useFrame((state, delta) => (console.log(ref)));
    return (
        <>
            <arrowHelper ref={ref} args={[direction, position, length, color]} />
        </>
    )
}

export default function Test() {
    let normal = new THREE.Vector3(3, 5, 3);
    let displacement = 3;
    const plane = new THREE.Plane(normal.clone(), displacement);
    const point = new THREE.Vector3(0, 0, -2);
    let centerPointOnPlane = normal.clone().normalize().negate().multiplyScalar(displacement);
    let pointToPointOnPlane = centerPointOnPlane.clone().sub(point.clone());
    let projected = pointToPointOnPlane.clone().projectOnVector(normal.clone());
    return (
        <div style={{ width: "100h", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Canvas style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <color attach="background" args={['#000000']} />
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <planeHelper args={[plane.clone(), 10, 0x00ff00]} /> */}
                <Plane normal={normal} displacement={displacement} />
                {/* <arrowHelper args={[point.clone().normalize(), new THREE.Vector3(0, 0, 0), point.clone().length(), 0x00ff00]} />
                <arrowHelper args={[normal.clone().normalize(), centerPointOnPlane.clone(), 1, 0x00ff00]} />
                <arrowHelper args={[pointToPointOnPlane.clone().normalize(), point.clone(), pointToPointOnPlane.clone().length(), 0x00ff00]} />
                <arrowHelper args={[projected.clone().normalize(), point.clone(), projected.clone().length(), 0x00ff00]} /> */}
                <Arrow position={new THREE.Vector3(0, 0, 0)} direction={point.clone().normalize()} length={point.clone().length()} color={0x00ff00} />
                <Arrow position={centerPointOnPlane.clone()} direction={normal.clone().normalize()} length={1} color={0x00ff00} />
                <Arrow position={point.clone()} direction={pointToPointOnPlane.clone().normalize()} length={pointToPointOnPlane.clone().length()} color={0x00ff00} />
                <Arrow position={point.clone()} direction={projected.clone().normalize()} length={projected.clone().length()} color={0x00ff00} />
                <Box position={[10, 20, 0]} />
            </Canvas>
        </div>
    )
}