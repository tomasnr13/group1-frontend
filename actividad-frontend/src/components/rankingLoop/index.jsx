import "./style.css";
import { SimplePaper} from "./components/paper";
/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
export const RankingLoop = () => {
    return (
            <div>
              <ul>
                {clothesList.map((piece) => (
                  <SimplePaper piece={piece}/>
                ))}
              </ul>
            </div>
    )
}