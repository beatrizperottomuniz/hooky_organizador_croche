function Component() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="50">
      <div className="bg-white border border-[#d6d6d6] border-solid col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        50
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #FFFFFF
      </p>
    </div>
  );
}

function Component6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#efefef] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #EFEFEF
      </p>
    </div>
  );
}

function Component7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#bdbdbd] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #BDBDBD
      </p>
    </div>
  );
}

function Component8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#989898] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #989898
      </p>
    </div>
  );
}

function Component9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#7c7c7c] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #7C7C7C
      </p>
    </div>
  );
}

function Component10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#3d3d3d] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#3d3d3d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        950
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #3D3D3D
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[19px] items-center leading-[0] relative shrink-0 w-full">
      <Component />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Neutral
      </p>
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="50">
      <div className="bg-[#ebecfc] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #EBECFC
      </p>
    </div>
  );
}

function Component11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#d9dafb] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #D9DAFB
      </p>
    </div>
  );
}

function Component12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#bbbbf8] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #BBBBF8
      </p>
    </div>
  );
}

function Component13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#9e99f2] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #9E99F2
      </p>
    </div>
  );
}

function Component14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#7569ea] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #7569EA
      </p>
    </div>
  );
}

function Component15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#6148df] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        600
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #6148DF
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <Component1 />
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <div className="absolute left-[332px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 1" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Purple
      </p>
      <Frame2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="50">
      <div className="bg-[#f1f7d0] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #F1F7D0
      </p>
    </div>
  );
}

function Component16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#e4f0a6] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #E4F0A6
      </p>
    </div>
  );
}

function Component17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#cfe473] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #CFE473
      </p>
    </div>
  );
}

function Component18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#b9d448] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #B9D448
      </p>
    </div>
  );
}

function Component19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#a0bf2a] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #A0BF2A
      </p>
    </div>
  );
}

function Component20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#7a941d] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        600
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #7A941D
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <Component2 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
      <div className="absolute left-[431px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 1" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Green
      </p>
      <Frame3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="50">
      <div className="bg-[#e2f0fc] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #E2F0FC
      </p>
    </div>
  );
}

function Component21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#c0e0f9] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #C0E0F9
      </p>
    </div>
  );
}

function Component22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#89c9f2] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #89C9F2
      </p>
    </div>
  );
}

function Component23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#47ace9] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #47ACE9
      </p>
    </div>
  );
}

function Component24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#2092d8] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #2092D8
      </p>
    </div>
  );
}

function Component25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#1174b7] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        600
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #1174B7
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <Component3 />
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
      <div className="absolute left-[233px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 1" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Blue
      </p>
      <Frame8 />
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="50">
      <div className="bg-[#feebd7] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #FEEBD7
      </p>
    </div>
  );
}

function Component26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#fcd5ac] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #FCD5AC
      </p>
    </div>
  );
}

function Component27() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#fbc79a] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #FBC79A
      </p>
    </div>
  );
}

function Component28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#f68c41] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #F68C41
      </p>
    </div>
  );
}

function Component29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#f26513] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #F26513
      </p>
    </div>
  );
}

function Component30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#e45213] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        600
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #E45213
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <Component4 />
      <Component26 />
      <Component27 />
      <Component28 />
      <Component29 />
      <Component30 />
      <div className="absolute left-[431px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 1" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute left-[332px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 2" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Orange
      </p>
      <Frame10 />
    </div>
  );
}

function Component5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="50">
      <div className="bg-[#f8ebfd] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        100
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #F8EBFD
      </p>
    </div>
  );
}

function Component31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="962">
      <div className="bg-[#f1d4fb] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #F1D4FB
      </p>
    </div>
  );
}

function Component32() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="963">
      <div className="bg-[#e2a0f2] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #E2A0F2
      </p>
    </div>
  );
}

function Component33() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="964">
      <div className="bg-[#d985ed] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        400
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #D985ED
      </p>
    </div>
  );
}

function Component34() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="965">
      <div className="bg-[#c656df] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <p className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500
      </p>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #C656DF
      </p>
    </div>
  );
}

function Component35() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="966">
      <div className="bg-[#ac36c3] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[80px]" data-name="Color" />
      <div className="col-1 font-['SF_Pro:Medium',sans-serif] font-[510] ml-0 mt-[92px] relative row-1 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] mb-0">600</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="col-1 font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] lowercase ml-0 mt-[116px] relative row-1 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #AC36C3
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <Component5 />
      <Component31 />
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
      <div className="absolute left-[233px] size-[10px] top-[35px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" id="Ellipse 2" r="3.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pink
      </p>
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[45px] items-start left-1/2 top-[calc(50%-0.5px)] w-[575px]">
      <Frame6 />
      <Frame1 />
      <Frame7 />
      <Frame4 />
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-black h-[98px] left-0 top-0 w-[1105px]" />
    </div>
  );
}

export default function PaletaDeCores() {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Paleta de cores">
      <Frame5 />
      <Group />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[35px] text-[32px] text-white top-[29px] w-[310.834px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Paleta de cores
      </p>
    </div>
  );
}