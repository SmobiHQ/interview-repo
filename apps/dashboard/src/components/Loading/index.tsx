// const Loader = styled.div<LoaderProps>`

//   animation: spin 2s linear infinite;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

export const Loading = ({ size }: { size?: number }): React.ReactElement => {
  const bSize = size ? size / 8 : 4;
  const heightWidth = size ? size : 32;
  return (
    <div
      className={`animate-spinCustom rounded-full border-blue-100 border-t-blue-400`}
      style={{
        height: `${heightWidth}px`,
        width: `${heightWidth}px`,
        borderWidth: `${bSize}px`,
      }}
    />
  );
};
