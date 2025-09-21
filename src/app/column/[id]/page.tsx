import React from 'react';
import ColumnDetailClient from './ColumnDetailClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ColumnDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <ColumnDetailClient id={id} />;
}