const bookTitles = [
    " The Firm ",
    " A Time To Kill ",
    " Skipping Christmas ",
    " Bleachers "
  ];
  document.getElementById("arrayDiv").innerHTML +=
    "<h3>[" + bookTitles + "]</h3>";
  
  function printOrder(order) {
    var btmap = bookTitles.map((e) => e);
    switch (order.toLowerCase()) {
      case "original order":
        document.getElementById("arrayDiv").innerHTML =
          "<h3>[" + bookTitles + "]</h3>";
        break;
      case "alphabetic order":
        document.getElementById("arrayDiv").innerHTML =
          "<h3>[" + btmap.sort() + "]</h3>";
        break;
      case "reverse order":
        document.getElementById("arrayDiv").innerHTML =
          "<h3>[" + btmap.reverse() + "]</h3>";
        break;
    }
  }
  