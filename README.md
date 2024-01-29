# Fake Glow Material for React Three Fiber

A simple to use glow material for react three fiber that can create glow effect from a mesh.

<p align="center">
    <a href="https://r3f-fake-glow-material.vercel.app/" target="_blank"><img src="/public/preview.jpg" width="100%"/></a>
</p>

Live link: <a href="https://r3f-fake-glow-material.vercel.app/" target="_blank">https://r3f-fake-glow-material.vercel.app/</a>

Code Sandbox example: <a href="https://codesandbox.io/p/devbox/crazy-elbakyan-r8qz9n" target="_blank">https://codesandbox.io/p/devbox/crazy-elbakyan-r8qz9n</a>

# Introduction

This material enables the utilization of a 3D mesh as a GLOW effect through GLSL Shaders, all without the need for any post-processing effects.

Unlike traditional approaches using post-processing, my new React Three Fiber material employs GLSL Shaders directly for creating glow effects on 3D meshes. This method avoids the usual performance hit associated with post-processing, such as the bloom effect, making it a more efficient solution for integrating glow effects in 3D scenes.

# HOW TO USE?

### 1: Download the Material

Create a new file with the contents of [this gist](https://gist.github.com/ektogamat/af6cae96681679dde817e1f313278c8b) on your project.

Using TypeScript? [Use this one instead](https://gist.github.com/ektogamat/e00e4926ff9076facce49b7c6ab0fa22) - by (https://github.com/nirtamir2)

### 2: Import the material

```
import FakeGlowMaterial from './FakeGlowMaterial'
```

### 3: Add this as a material for your mesh

```
...
<mesh>
 <sphereGeometry />
 <FakeGlowMaterial />
</mesh>
...

```

Done. That's all that you need to use this component.

### This effect is mesh based, meaning that you need to provide a mesh for this to work properly

<p align="center">
    <img src="/public/example1.jpg" width="100%"/>
</p>

When you give it a mesh, remember that it must be smooth enough so glsl can calculate normals and create the effect. For example, for sharp meshes like a cube, you can use a sphere to simulate the glow, instead of a copy of the cube.

| ❌ Bad: Cube mesh for glow | ✅ Good: Sphere mesh for glow |
| :------------------------: | :---------------------------: |
| ![](/public/example2.jpg)  |   ![](/public/example3.png)   |

# Customization properties

You can use VSCODE Intellisense feature to get all the explanation for each property. Just press CRTL + SPACE BAR.

<p align="center">
    <img src="/public/intellisense.jpg" width="100%"/>
</p>

| Name               | Type    | Default           | Description                                                                                                                                                            |
| ------------------ | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| falloff            | Number  | 0.1               | Controls the value of the Falloff effect. Ranges from 0.0 to 1.0.                                                                                                      |
| glowInternalRadius | Number  | 6.0               | Controls the internal glow radius. Ranges from -1.0 to 1.0. Set a darker color to get the fresnel effect only.                                                         |
| glowColor          | String  | "#00ff00"         | Specifies the color of the hologram. Use hexadecimal format.                                                                                                           |
| glowSharpness      | Number  | 1.0               | Specifies the edges sharpness. Defaults to 1.0.                                                                                                                        |
| side               | String  | "THREE.FrontSide" | Specifies side for the material, as THREE.DoubleSide. Options are "THREE.FrontSide", "THREE.BackSide", "THREE.DoubleSide". Defaults to "THREE.FrontSide".              |
| opacity            | Number  | 1.0               | Controls the opacity for the effect. Defaults to 1.0                                                                                                                   |
| depthTest          | Boolean | false             | Enable or disable depthTest, controling if the mesh should not be visible when hided by other meshes. In case true, setting the side to FrontSide only is recommended. |

Here is an example of how you can pass these props. If you pass any of those props, the default values will be overwritten.

```
<FakeGlowMaterial
    falloff={0.2}
    glowInternalRadius={0.7}
    glowColor={"#ff0000"}
    glowSharpness={2.3}
    side={"THREE.FrontSide"}
    opacity={1.0}
    depthTest={false}
/>
```

You can also use LEVA to create a panel, like in the demo, so you can tweak the parameters live.

```
const glowControls = useControls({
    falloff: { value: 0.45, min: 0.0, max: 1.0 },
    glowInternalRadius: { value: 0.7, min: -1.0, max: 1.0 },
    glowColor: { value: "#51a4de" },
    glowSharpness: { value: 1.0, min: 0.0, max: 2.0 },
    side: { value: "THREE.FrontSide", options: ["THREE.FrontSide", "THREE.BackSide", "THREE.DoubleSide"] },
    opacity: { value: 1.0, min: 0.0, max: 1.0 },
    depthTest: false,
});
```

Then you can just spread this object to use it in FakeGlowMaterial

```
 <FakeGlowMaterial  {...glowControls} />
```

### Show, don't tell

Here you can [watch a video with](https://youtu.be/cBkPurVDdEI) it in action and some options

### Next steps

- Adding the possibility to receive a mesh and auto scale its normals

### License

This component is an open-source creation released under the (MIT) license. While you're free to integrate and innovate with it, I would genuinely appreciate knowing when this Fake Glow Material component sparks creativity in your projects!

### Resources

Resources: [Threejs](https://threejs.org/), [WebGL](https://github.com/KhronosGroup/WebGL), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [React three post processing](https://github.com/pmndrs/react-postprocessing)

# Can you leave a star please?

Would be really appreciated if you are willing to give me a star here on GitHub 🎉 or buy me a coffee ☕ https://www.buymeacoffee.com/andersonmancini. The money will be used to produce more content about threejs or to buy new courses.
