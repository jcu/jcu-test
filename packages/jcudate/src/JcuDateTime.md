
`<JcuDateTime>` is for representing a moment in time. It also powers [`<JcuDate>`](#jcudate) and [`<JcuTime>`](#jcutime), which may provide more convenient defaults if you are rendering strictly date data or strictly time data.

Usually you will supply a date + time string in the `dateTime` prop, but if you don't it will show the current date and time.

A JcuDateTime showing the current date will stay "current", updating it's display as minutes roll by (if you stare at the example below for a minute, you'll see it update).  If you don't want this, add the `static` prop.

```jsx
<p>Right now it's <JcuDateTime /></p>
```

Supply the moment you want displayed as a string in the `dateTime` prop. The expected format is `YYYY-MM-DDTHH:MM:SS`, e.g. `2020-12-25T06:00:01` for one second after 6am on Christmas in 2020.  You can use a different input format if you describe it in the `inputFormat` prop.  The format string for Unix timestamps is a capital `X`.

JcuDateTime uses moment.js to parse and format dates, so check [that documentation](https://momentjs.com/docs/#/parsing/string-format/) for the full set of input formats.

```jsx
<p>
    <JcuDateTime dateTime="2020-12-25T06:00:01" />
    <tt> (supplied as "2020-12-25T06:00:01")</tt>
</p><p>
    <JcuDateTime dateTime="6:01am Dec 25, 2020" inputFormat="H:MMa MMM DD, YYYY" />
    <tt> (supplied as "6:01am Dec 25, 2020")</tt>
</p><p>
    <JcuDateTime dateTime="day 360 of 2020 at 06:01" inputFormat="[day] DDD [of] YYYY [at] Ha" />
    <tt> (supplied as "day 360 of 2020 at 6am")</tt>
</p>
```

You can also supply an output format in the `outputFormat` prop. Check the moment.js documentation for the [full set of output formats](https://momentjs.com/docs/#/displaying/format/) available.

```jsx
<JcuDateTime outputFormat="[it is] m [minutes after] h a [on] dddd [in the] wo [week of] YYYY" />
```

Consider if your users would prefer to see how long since, or until, the moment you're displaying.  If you think showing a relative time period is more useful, add the `relative` prop.  The following example uses `relative` to tell you how long ago Donald Trump assumed office as the 45th president of the United States.

```jsx
<JcuDateTime dateTime="2017-01-20T12:00" relative />
```

Relative dates will automatically update if enough time passes; to prevent that, add the `static` prop.

You don't have to supply `dateTime` when using `relative`, but the relative representation of the current time will always be displayed as "now", which is probably uninformative.


### Future Features for JcuDateTime

**Specificity of `relative`.** It would be nice to opt for more specific output when using the `relative` prop. Possibly simply adding a second unit -- e.g. if `relative` gives "two years ago", `relative="detailed"` could give "two years and one month ago".