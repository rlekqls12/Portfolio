import React, { useCallback, useEffect, useState } from 'react';
import { DetailBackground, DetailContent, DetailWrap } from './detailStyle';

type Props = {
  open: number | undefined;
  close?: () => void;
};

function Detail(props: Props) {
  const [open, setOpen] = useState<number | undefined>(undefined);

  const scrollLock = useCallback(
    function () {
      let overflow = 'unset';
      if (open !== undefined) overflow = 'hidden';
      document.body.style.overflow = overflow;
    },
    [open]
  );

  const onClose = useCallback(
    function () {
      setOpen(undefined);
      if (props.close) props.close();
      scrollLock();
    },
    [props, scrollLock]
  );

  useEffect(
    function () {
      setOpen(props.open);
      scrollLock();
    },
    [props.open, scrollLock]
  );

  return (
    <DetailWrap open={open}>
      <DetailBackground open={open} onClick={onClose} />
      <DetailContent open={open} />
    </DetailWrap>
  );
}

Detail.defaultProps = {};

export default Detail;
