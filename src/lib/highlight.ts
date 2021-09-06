import Prism from 'prismjs';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

export const highlight = (node) => {
  for (const code of node.querySelectorAll('code')) {
    if (code.classList.length === 0) {
      code.classList.add('language-none');
    }
  }
  Prism.highlightAllUnder(node);
}