# Geolocation API

## Manipulate Geolocation 
> In chrome dev tools click three dots > Extras > Sensors then chnage Location.

## Get Geolocation
```js
    window.navigator.geolocation.getCurrentPosition(
        // 1st Arg: Success Callback
        (position) => {
            console.log(position);
        },
        // 2nd Arg: Failure Callback
        (err) => {

        }
    );
```