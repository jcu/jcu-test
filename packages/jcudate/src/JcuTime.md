
This is a convenience wrapper of [`<JcuDateTime>`](#jcudatetime) with time-level default formats. Refer to that component for detailed documentation.

Usually you will supply a time in the `time` prop, but if you don't it will show the current time. The `static` prop prevents this, as described in JcuDateTime.

```jsx
<p>Right now it's <JcuTime /></p>
```

Supply the time you want displayed as a string in the `time` prop (this is the equivalent to JcuDateTime's `dateTime` prop). Note that you'll need to specify a date along with your time. The expected format for `time` is `YYYY-MM-DDTHH:MM:SS`, e.g. `2020-12-25T06:00:01` for one second after 6am on Christmas in 2020. Alternate input formats can be specified in `inputFormat`; refer to JcuDateTime for more information.

```jsx
<p>
    <JcuTime time="2020-12-25T06:00:01" />
    <tt> (supplied as "2020-12-25T06:00:01")</tt>
</p><p>
    <JcuTime time="6:01am Dec 25, 2020" inputFormat="H:MMa MMM DD, YYYY" />
    <tt> (supplied as "6:01am Dec 25, 2020")</tt>
</p><p>
    <JcuTime time="day 360 of 2020 at 06:01" inputFormat="[day] DDD [of] YYYY [at] Ha" />
    <tt> (supplied as "day 360 of 2020 at 6am")</tt>
</p>
```

You can supply an output format in the `outputFormat` prop. Check JcuDateTime for specifics.

```jsx
<JcuTime outputFormat="[it is] m [minutes after] h a" />
```

Your users may prefer to see how long since, or until, the time you're displaying.  Add the `relative` prop to show relative time ago or until.  The following example uses `relative` to tell you how long ago Donald Trump assumed office as the 45th president of the United States.

```jsx
<JcuTime time="2017-01-20T12:00" relative />
```

Relative times will automatically update if enough time passes; to prevent that, add the `static` prop.

You don't have to supply a time when using `relative`, but the relative representation of the current time will be displayed as "now".

### Future Features for JcuTime

**Default date parts.** It's a chore to specify the date as well as the time; it should be possible to leave off the date part, and have it default to today. E.g. I should be able to use `<JcuTime time="17:00" />` and that implies knockoff time today.



