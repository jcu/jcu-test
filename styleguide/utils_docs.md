## Modules

<dl>
<dt><a href="#module_appConfigSchema">appConfigSchema</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#environment">environment</a></dt>
<dd><p>A JSON Schema to validate configuration for a run-time 
environment description. This is intended to capture the 
identity of a run time environment such as production, 
testing, UAT, etc.</p>
<p>Environment configs should look like:</p>
<table>
<thead>
<tr>
<th>Item</th>
<th>Optional?</th>
<th>Details</th>
</tr>
</thead>
<tbody><tr>
<td><code>type</code></td>
<td>required</td>
<td>either <code>&#39;prod&#39;</code> or <code>&#39;non-prod&#39;</code></td>
</tr>
<tr>
<td><code>name</code></td>
<td>optional</td>
<td>A string name. If omitted, defaults to the <code>type</code></td>
</tr>
<tr>
<td><code>description</code></td>
<td>optional</td>
<td>A string description, in Markdown format.</td>
</tr>
</tbody></table>
</dd>
</dl>

<a name="module_appConfigSchema"></a>

## appConfigSchema
<a name="environment"></a>

## environment
A JSON Schema to validate configuration for a run-time environment description. This is intended to capture the identity of a run time environment such as production, testing, UAT, etc.Environment configs should look like:| Item   | Optional? | Details| ------ | --------- | -------------------------------| `type` | required  | either `'prod'` or `'non-prod'`| `name` | optional  | A string name. If omitted, defaults to the `type`| `description` | optional | A string description, in Markdown format.

**Kind**: global variable  
