function deleteProduct(id) {
  const result = confirm("Are you sure you want to delete this product?");
  if (result) {
    fetch("delete/" + id, {
      method: "POSt",
    }).then((res) => {
      if (res.ok) {
        location.reload();
      }
    });
  }
}
