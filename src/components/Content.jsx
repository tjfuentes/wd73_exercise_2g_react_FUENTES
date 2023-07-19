function Content (info) {

  const {number, firstName, lastName, address} = info;

  return (
    <>
      <table className="table m-2">
        <thead>
          <tr>
            <th className="col-3">First Name</th>
            <th className="col-3">Last Name</th>
            <th className="col-3">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-3">{firstName}</td>
            <td className="col-3">{lastName}</td>
            <td className="col-3">{address}</td>
          </tr>
        </tbody>
    </table>` 
    </>
  )

}

export default Content