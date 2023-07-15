import './App.css';
import IncreseDecrese from './component/PraticeReduser';
import About from './component/About';
import PraticeSetStateHook from './component/PraticeSetState';
import Cowndown from './component/PraticeUseRef';
import UseDeffectPratice from './component/PraticeUsedeffect';
import NoteProvider from './component/context/context2';
import MemoFunction from './component/PraticeUseMemo';
import PraticeCallBack from './component/PraticeUseCallBack';
import Home from './component/HomeCustomHook1';
function App() {
  return (
    <div className="App">
      <NoteProvider>
      <About/>
      </NoteProvider>
      <PraticeSetStateHook/>
      <UseDeffectPratice/>
      <Cowndown/>
      <IncreseDecrese/>
    <MemoFunction/>
    <PraticeCallBack/>
    <Home/>
    </div>

  );
}
export default App;















