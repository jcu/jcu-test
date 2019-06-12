#### Basic JCU Date Time Usage:

```js
<div className="styleguidist__btns-wrap">
  <JcuDate
    type="primary"
    onClick={() => { window.alert('Primary Button was Clicked'); }}
  >
    <span>Primary Button</span>
  </JcuDate>
  <br />
  <br />
  <JcuDate
    type="secondary"
    onClick={() => { window.alert('Secondary Button was Clicked'); }}
  >
    <span>Secondary Button</span>
  </JcuDate>
  <br />
  <br />
  <JcuDate
    onClick={() => { window.alert('Secondary Button was Clicked'); }}
  >
    <span>Normal Button</span>
  </JcuDate>
  <br />
  <br />
  <JcuDate
    isDisabled
    onClick={() => { window.alert('Nothing happens on Click'); }}
  >
    <span>Disabled Button</span>
  </JcuDate>
</div>
```
