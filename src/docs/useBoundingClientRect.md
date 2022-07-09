# useBoundingClientRect Hook

## Code Dependencies

> <strong>Mutation Observer</strong>: A built-in object that observes a DOM element and fires a callback when it detects a change.

<br />

# Hook Usage

```
import { useRef } from "react";
import useBoundingClientRect from "./Hooks/useBoundingClientRect";

function Demo() {
  const ref = useRef();
  let value = useBoundingClientRect(ref);

  const displayValue = JSON.stringify(value, 2, 1);

  return (
    <div className="wrapper">
      <div
        ref={ref}
        style={{
          width: "100px",
          height: "100px",
          padding: "20px",
          border: "1px solid black",
        }}
      />
      <pre>{displayValue}</pre>
    </div>
  );
}

export default Demo;
```

## Demo

# [link to codesandbox](https://1myvse.csb.app/)
