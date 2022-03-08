// Skeleton State
import { $ } from "./dqselector.js";
$();

export function skeletonState() {
  const skeleton = $("ul.empty-list");
  console.log(skeleton);
  skeleton.classList.toggle("hidden");
}
