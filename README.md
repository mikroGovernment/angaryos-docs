# Türkçe Anasayfa

The content goes here...


- [Home](/) <!-- Send the user to Homepage -->
- [Use Vue in Markdown](/guide/use-vue-in-markdown) <!-- Send the user to another page -->
- [Check out the `title` option](../options.md#title) <!-- Even relative link to markdown tile -->


- [Docute website](https://docute.org)
- [Docute repo](https://github.com/egoist/docute)


- [ ] Rule the web
- [x] Conquer the world
- [ ] Learn Docute

## Test başlık 1

```js {highlightLines: [2]}
function foo() {
  console.log('foo')
}
```



## Test başlık 2

```js {highlight:[3,'5-7',12]}
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

__FAQ__:

<details><summary>what is the meaning of life?</summary>

some say it is __42__, some say it is still unknown.
</details>

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```js
const foo = `{{ safe, this won't be interpolated! }}`
```

And `{{ bar }}` is safe too!


<ImageZoom 
  src="https://i.loli.net/2018/09/24/5ba8e878850e9.png" 
  :border="true" 
  width="300"
/>


- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="tip">Tip</Badge>
- Feature 3 <Badge type="success">Success</Badge>
- Feature 4 <Badge type="warning">Warning</Badge>
- Feature 5 <Badge type="danger">Danger</Badge>
- Feature 6 <Badge color="magenta">Custom Color</Badge>

<Note>

This is a note that details something important.<br>
[A link to helpful information.](https://docute.org)

</Note>

<!-- Tip Note -->
<Note type="tip">

This is a tip for something that is possible.

</Note>

<!-- Warning Note -->
<Note type="warning">

This is a warning for something very important.

</Note>

<!-- Danger Note -->
<Note type="danger">

This is a danger for something to take action for.

</Note>



<Gist id="71b8002ecd62a68fa7d7ee52011b2c7c" />





