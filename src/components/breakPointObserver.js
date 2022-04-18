
const matchMediaQuery = (breakpoints, setBreakpoint) => {
    for (var key of Object.keys(breakpoints)) {       
        if (window.matchMedia(`${breakpoints[key]}`). matches) {
            setBreakpoint(key);
        }
    }
}

export default function breakPointObserver (breakpoints, setBreakpoint) {
    matchMediaQuery(breakpoints, setBreakpoint)

    window.addEventListener("resize", () => {
        matchMediaQuery(breakpoints, setBreakpoint)
    })
}