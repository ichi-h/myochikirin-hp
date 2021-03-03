function Download() {
  return (
    <div className="download">
      <h1>ダウンロード</h1>
      <div className="windows"><button onClick="">Windows</button></div>
      <div className="mac"><button onClick="">macOS</button></div>
      <div className="spec">
        <p>このゲームはWindows 10 Home、およびmacOS Catalina 10.15.7にて開発されました。</p>
      </div>
    </div>
  );
}

export default Download;
