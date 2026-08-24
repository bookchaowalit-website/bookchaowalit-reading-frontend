---
name: Reading Shelf
description: A forest-green shelf for finding the next book or essay to open.
---

# Design System: Reading Shelf

## Overview

Reading Shelf is a compact local queue for books and essays. Its world is a quiet library shelf: the dark index helps choose a piece, and the cream page opens a margin note about why it is still here. It is a reading tool, not an import service or social reading platform.

## Colors

- **Forest** `#17372f`: shelf room and primary ambient field.
- **Deep forest** `#102a24`: index surface.
- **Paper** `#eee9dc`: open page.
- **Gold** `#d3aa4b`: open shelf state and category selection.
- **Coral** `#c8634d`: page marks and reading boundary.
- **Blue** `#8bb4b0`: summary/annotation voice.
- **Rule** `#5d766c`: shelf structure.

Gold marks an open shelf choice; coral marks page indexing and limits. The paper is reserved for the active reading surface.

## Typography

Geist Sans carries book titles and navigation. Georgia italic provides the summary and margin-note reading voice. Geist Mono is used for categories, progress metadata, and explicit no-import/no-sync copy.

## Layout

The first viewport frames the shelf thesis and then opens an index/page split: search and category tabs on the left, the selected reading page on the right. On narrow screens the whole index comes before the page, preserving the act of choosing before reading.

## Elevation & Depth

Forest around deep forest around paper creates the depth stack. Rules and a selected shelf row provide state. There are no floating cards or shadows; the opened page is the only light surface.

## Shapes

Shelf rows and the open page are square editorial forms. The stamp is a small rotated shelf mark. Category controls use bordered rectangles, not pills.

## Components

- **Shelf index:** search, All/Book/Essay tabs, selectable rows, and no-match state.
- **Open page:** category/meta bar, page number, title, summary, margin note, and source boundary.
- **Local sample list:** authored reading records with no remote import, progress sync, or account.

## Do's and Don'ts

- Do make “what should I open next?” answerable within seconds.
- Do let the selected page feel calmer and lighter than the index.
- Do keep sample/progress limits visible.
- Don't imply library integration, synchronized progress, or recommendations.
- Don't turn the shelf into a repeated reading-card grid or generic productivity dashboard.
