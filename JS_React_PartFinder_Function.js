/**
 * This is Client Side code implemented for React Suitelet in file "SL_Suitelet_React.js"
 */

function PartFinder(props) {
    const [partname, setPartname] = React.useState();
    const [vendor, setVendor] = React.useState();
    const handleSubmit = event => {
        alert(partname + ' - ' + vendor);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            Item Name:<br />
            <input type="text"
                value={partname}
                onChange={(e) => setPartname(e.target.value)}
            /><br />
            <br />
            Vendor Name:<br />
            <input type="text"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
            /><br />
            <br />
            <button>Submit</button>
        </form>
    );
}