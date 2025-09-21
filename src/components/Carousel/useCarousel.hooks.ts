"use client";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useEffect, useState } from "react";
import { useDotButton } from "./useDotButton.hooks";
import { usePrevNextButtons } from "./usePrevNextButtons.hooks";

interface UseCarouselOptions {
  loop?: boolean;
  playOnInit?: boolean;
  delay?: number;
  onSelectedIndexChange?: (index: number) => void;
  disableDrag?: boolean;
}

export const useCarousel = ({
  loop = true,
  playOnInit = false,
  delay = 3000,
  onSelectedIndexChange,
  disableDrag = false,
}: UseCarouselOptions = {}) => {
  const [isPlaying, setIsPlaying] = useState(playOnInit);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [wheelSelectedIndex, setWheelSelectedIndex] = useState(0);
  const [wheelScrollSnaps, setWheelScrollSnaps] = useState<number[]>([]);

  const options: EmblaOptionsType = {
    loop,
    skipSnaps: true,
    axis: "x",
    dragFree: false,
  };

  const autoplay = Autoplay({
    playOnInit,
    delay,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    autoplay,
    WheelGesturesPlugin(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!disableDrag && emblaApi) {
      const autoplayPlugin = emblaApi?.plugins()?.autoplay;
      const wheelScroll = emblaApi?.plugins()?.wheelGestures;
      if (!autoplayPlugin || !wheelScroll) return;

      setIsPlaying(autoplayPlugin.isPlaying());

      const onAutoplayPlay = () => setIsPlaying(true);
      const onAutoplayStop = () => setIsPlaying(false);
      const onReInit = () => setIsPlaying(autoplayPlugin.isPlaying());

      emblaApi
        .on("autoplay:play", onAutoplayPlay)
        .on("autoplay:stop", onAutoplayStop)
        .on("reInit", onReInit);

      const onSelect = () => {
        setWheelSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
      };

      setWheelScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect();

      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("autoplay:play", onAutoplayPlay);
        emblaApi.off("autoplay:stop", onAutoplayStop);
        emblaApi.off("reInit", onReInit);
      };
    }
  }, [emblaApi, disableDrag]);

  useEffect(() => {
    if (onSelectedIndexChange) {
      onSelectedIndexChange(selectedIndex);
    }
  }, [selectedIndex, onSelectedIndexChange]);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplayPlugin = emblaApi?.plugins()?.autoplay;
      const wheelScroll = emblaApi?.plugins()?.wheelGestures;
      if (!autoplayPlugin || !wheelScroll) return;

      callback();
    },
    [emblaApi]
  );

  return {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollSnaps,
    wheelSelectedIndex,
    wheelScrollSnaps,
    isPlaying,
    prevBtnEnabled,
    nextBtnEnabled,
    onDotButtonClick,
    onPrevButtonClick: () => onButtonAutoplayClick(onPrevButtonClick),
    onNextButtonClick: () => onButtonAutoplayClick(onNextButtonClick),
  };
};
