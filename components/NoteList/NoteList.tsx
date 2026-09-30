'use client';
import React from 'react';
import Link from 'next/link';
import css from './NoteList.module.css';
import { Note } from '@/lib/api';

type Props = {
  notes: Note[];
  onDelete?: (id: string) => void;
};

const NoteList = ({ notes, onDelete }: Props) => {
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note.id} className={css.item}>
          <h3 className={css.title}>{note.title}</h3>
          <p className={css.content}>{note.content}</p>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>

            <div className={css.actions}>
              <Link href={`/notes/${note.id}`} className={css.link}>
                View details
              </Link>

              <button type="button" className={css.button} onClick={() => onDelete?.(note.id)}>
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
