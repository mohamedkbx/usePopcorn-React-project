export function useKey() {
  useEffect(
    function () {
      function callBack(e) {
        if (e.key === "Escape") {
          onHandleClose();
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [onHandleClose]
  );
}
