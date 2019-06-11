#### Basic JCUDate Usage:

```js
<div className="styleguidist__btns-wrap">
  <JCUDATE
    type="primary"
    onClick={() => { window.alert('Primary Button was Clicked'); }}
  >
    <span>Primary Button</span>
  </JCUDATE>
  <br />
  <br />
  <JCUDATE
    type="secondary"
    onClick={() => { window.alert('Secondary Button was Clicked'); }}
  >
    <span>Secondary Button</span>
  </JCUDATE>
  <br />
  <br />
  <JCUDATE
    onClick={() => { window.alert('Secondary Button was Clicked'); }}
  >
    <span>Normal Button</span>
  </JCUDATE>
  <br />
  <br />
  <JCUDATE
    isDisabled
    onClick={() => { window.alert('Nothing happens on Click'); }}
  >
    <span>Disabled Button</span>
  </JCUDATE>
</div>
```
