export default function NewConcept(props) {
    // This is not a static component; we'll be passing input props
    // and rendering dynamically based on that data.
    return (
        // I can write {inline javascript}   (thanks JSX!)
        <p>In this class, we'll learn: {props.concept}</p>
    )
}
