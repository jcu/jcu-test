
This is a convenience wrapper of [`<JcuDateTime>`](#jcudatetime) with date-level default formats. Refer to that component for detailed documentation.

Usually you will supply a date in the `date` prop, but if you don't it will show the current date. The `static` prop prevents this, as described in JcuDateTime.

```jsx
<p>Today is <JcuDate /></p>
```

Supply the date you want displayed as a string in the `date` prop (this is the equivalent to JcuDateTime's `dateTime` prop). The expected format for `date` is `YYYY-MM-DD`, e.g. `2020-12-25` for Christmas in 2020. Alternate input formats can be specified in `inputFormat`; refer to JcuDateTime for more information.

```jsx
<p>
    <JcuDate date="2020-12-25" />
    <tt> (supplied as "2020-12-25")</tt>
</p><p>
    <JcuDate date="Dec 25, 2020" inputFormat="MMM DD, YYYY" />
    <tt> (supplied as "Dec 25, 2020")</tt>
</p><p>
    <JcuDate date="day 360 of 2020" inputFormat="[day] DDD [of] YYYY" />
    <tt> (supplied as "day 360 of 2020")</tt>
</p>
```

You can supply an output format in the `outputFormat` prop. Check JcuDateTime for specifics.

```jsx
<JcuDate outputFormat="[it is] dddd [in the] wo [week of] YYYY" />
```

Your users may prefer to see how long since, or until, the date you're displaying.  Add the `relative` prop to show relative time ago or until.  The following example uses `relative` to tell you how long ago Donald Trump assumed office as the 45th president of the United States.

```jsx
<JcuDate date="2017-01-20" relative />
```

Relative dates will automatically update if enough time passes; to prevent that, add the `static` prop.

You don't have to supply a date when using `relative`, but the relative representation of the current date will be displayed as "now".
