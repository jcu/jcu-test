
Usually you will supply a date in the `datetime` prop, but if you don't, it will show the current date and time.

A JcuDateTime showing the current date and time will stay "current", so if your browser window is open over midnight the date below will update to show the new day.  If you don't want this, add the `static` prop.

```jsx
<p>Today is <JcuDateTime /></p>
```

Supply the date you want displayed as a string in the `datetime` prop. The expected format is `YYYY-MM-DD`, e.g. `2020-12-25` for Christmas in 2020.  You can use a different input date format if you describe it in the `inputFormat` prop.  The format string for Unix timestamps is a capital `X`.

JcuDate uses moment.js to parse and format dates, so check [that documentation](https://momentjs.com/docs/#/parsing/string-format/) for the full set of input formats.

```jsx
<p>
    <JcuDateTime dateTime="2020-12-25" />
    <tt> supplied as "2020-12-25"</tt>
</p><p>
    <JcuDateTime dateTime="Dec 25, 2020" inputFormat="MMM DD, YYYY" />
    <tt> supplied as "Dec 25, 2020"</tt>
</p><p>
    <JcuDateTime dateTime="day 360 of 2020" inputFormat="[day] DDD [of] YYYY" />
    <tt> supplied as "day 360 of 2020"</tt>
</p>
```

You can also supply an output format in the `outputFormat` prop. Check the moment.js documentation for the [full set of output formats](https://momentjs.com/docs/#/displaying/format/) available.

```jsx
<JcuDateTime outputFormat="[it is] dddd [in the] wo [week of] YYYY" />
```

Consider if your users would prefer to see how long since, or until, the date you're displaying.  If you think a relative time is more useful, add the `relative` prop.  The following example uses `relative` to tell you how long ago Donald Trump assumed office as the 45th president of the United States.

```jsx
<JcuDateTime dateTime="2017-01-20" relative />
```

Relative dates will automatically update if enough time passes; to prevent that, add the `static` prop.

You don't have to supply a date when using `relative`, but the relative representation of the current date will be displayed as "now".
