---
{"dg-publish":true,"permalink":"/notes/fiction-rating-flowchart/","created":"2026-07-25T13:22:59.417+01:00","updated":"2026-09-16T19:49:38.350+01:00","dg-note-properties":{"created":"2024-10-19-12:00","updated":"2026-07-16-21:47","cssclasses":[]}}
---


# Fiction Rating Flowchart

```mermaid
flowchart TD

A[How do I rate the book I've finished?]--> C{Would I recommend the book?}

C -->|No| D{Is it irredeemable?}

D -->|Yes| F[1]

D -->|No, but most of it is| G[2]

C -->|Yes| H{Would I reread it?}

H -->|No, it was poor quality| I[2.5]

H -->|No, I didn't enjoy it| J[3]

H -->|Yes| K{Is it flawed?}

K -->|Yes| L{Does it make up for its flaws?}

L -->|No| M[3.5]

L -->|Yes, but the flaws are severe| N[4]

L -->|Yes, and the flaws are minor| O[4.5]

K -->|No| P[5]
```
