/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import { Autoformat } from '@ckeditor/ckeditor5-autoformat/src/index';
import { Bold, Italic, Code, Strikethrough } from '@ckeditor/ckeditor5-basic-styles/src/index';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote/src/index';
import { DragDrop, PastePlainText, ClipboardPipeline } from '@ckeditor/ckeditor5-clipboard/src/index';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block/src/index';
import { Essentials } from '@ckeditor/ckeditor5-essentials/src/index';
import { Font } from '@ckeditor/ckeditor5-font/src/index';
import { Heading, Title } from '@ckeditor/ckeditor5-heading/src/index';
import { Highlight } from '@ckeditor/ckeditor5-highlight/src/index';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line/src/index';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent/src/index';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link/src/index';
import { List, TodoList } from '@ckeditor/ckeditor5-list/src/index';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed/src/index';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office/src/index';
import { Table } from '@ckeditor/ckeditor5-table/src/index';
import { WordCount } from '@ckeditor/ckeditor5-word-count/src/index';
import { TextTransformation } from '@ckeditor/ckeditor5-typing/src/index';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/src/index';

import '../theme/theme.css';



class CustomBalloonEditor extends BalloonEditorBase {}

// Plugins to include in first editor
CustomBalloonEditor.builtinPlugins = [
	Essentials,
	BlockToolbar,
	Bold,
	Italic,
	Link,
	MediaEmbed,
	HorizontalLine,
	BlockQuote,
	Heading,
	WordCount,
	Autoformat,
	List,
	TodoList,
	CodeBlock,
	TextTransformation,
	Code,
	Strikethrough,
	Indent,
	IndentBlock,
	Font,
	PasteFromOffice,
	Highlight,
	AutoLink,
	DragDrop,
	PastePlainText,
	ClipboardPipeline,
	Paragraph,
	Title,
	Table
];

// First Editor configuration.
CustomBalloonEditor.defaultConfig = {
	blockToolbar: [
		'insertTable',
		'strikethrough',
		'horizontalLine',
		'codeBlock',
		'|',
		'undo',
		'redo',
		'|',
		'selectAll',
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'code',
			'|',
			'blockQuote',
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	wordCount: { },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default {
	CustomBalloonEditor
}
