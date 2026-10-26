-- ==========================================
-- LIBRERÍA DE UI (Subir a Pastebin/GitHub)
-- ==========================================
local CoreGui = game:GetService("CoreGui")
local LocalPlayer = game:GetService("Players").LocalPlayer
local PlayerGui = LocalPlayer:WaitForChild("PlayerGui")

if PlayerGui:FindFirstChild("MM2DashboardUI") then
    PlayerGui:FindFirstChild("MM2DashboardUI"):Destroy()
end

local Colors = {
    BgDark = Color3.fromRGB(18, 18, 18),
    Panel = Color3.fromRGB(28, 28, 28),
    PanelLight = Color3.fromRGB(40, 40, 40),
    Text = Color3.fromRGB(240, 240, 240),
    TextDim = Color3.fromRGB(150, 150, 150),
    Accent = Color3.fromRGB(255, 255, 255),
    AccentText = Color3.fromRGB(20, 20, 20),
    Green = Color3.fromRGB(100, 200, 100)
}

local function Create(className, properties, parent)
    local inst = Instance.new(className)
    for k, v in pairs(properties) do
        inst[k] = v
    end
    inst.Parent = parent
    return inst
end

local function AddCorner(inst, radius)
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, radius or 8)
    corner.Parent = inst
end

local ScreenGui = Create("ScreenGui", {Name = "MM2DashboardUI", ResetOnSpawn = false, Parent = PlayerGui})

local MainApp = Create("Frame", {
    Name = "MainApp",
    Parent = ScreenGui,
    BackgroundColor3 = Colors.BgDark,
    BorderSizePixel = 0,
    Position = UDim2.new(0.5, -450, 0.5, -300),
    Size = UDim2.new(0, 900, 0, 600),
    Active = true,
    Draggable = true
})
AddCorner(MainApp, 16)

local Sidebar = Create("Frame", {
    Parent = MainApp,
    BackgroundColor3 = Colors.BgDark,
    Size = UDim2.new(0, 180, 1, 0),
    Position = UDim2.new(0, 10, 0, 10),
    BorderSizePixel = 0
})

local catY = 0
local function CreateSidebarCategory(title, items)
    local catHeight = 30 + (#items * 25)
    local cat = Create("Frame", {Parent = Sidebar, BackgroundTransparency = 1, Size = UDim2.new(1, 0, 0, catHeight), Position = UDim2.new(0, 0, 0, catY)})
    catY = catY + catHeight + 15
    Create("TextLabel", {Parent = cat, BackgroundTransparency = 1, Size = UDim2.new(1, 0, 0, 20), Text = title, TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 11, TextXAlignment = Enum.TextXAlignment.Left})
    local itemY = 20
    for _, item in ipairs(items) do
        local btn = Create("TextButton", {Parent = cat, BackgroundTransparency = 1, Size = UDim2.new(1, 0, 0, 25), Position = UDim2.new(0, 0, 0, itemY), Text = "  " .. item, TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 12, TextXAlignment = Enum.TextXAlignment.Left, AutoButtonColor = false})
        AddCorner(btn, 6)
        itemY = itemY + 25
    end
end

CreateSidebarCategory("Planning", {"Documents", "Budget", "Reports", "Goals", "Calendar"})
CreateSidebarCategory("Overview", {"Analytics", "Transactions", "Investments", "Accounts", "Spending"})
CreateSidebarCategory("Account", {"Profile", "Billing", "Notifications", "Security", "Appearance"})

local function CreatePanel(x, y, w, h, title, subtitle)
    local panel = Create("Frame", {Parent = MainApp, BackgroundColor3 = Colors.Panel, Position = UDim2.new(0, x, 0, y), Size = UDim2.new(0, w, 0, h), BorderSizePixel = 0})
    AddCorner(panel, 12)
    if title then
        Create("TextLabel", {Parent = panel, BackgroundTransparency = 1, Size = UDim2.new(1, -20, 0, 20), Position = UDim2.new(0, 15, 0, 15), Text = title, TextColor3 = Colors.Text, Font = Enum.Font.GothamBold, TextSize = 14, TextXAlignment = Enum.TextXAlignment.Left})
    end
    if subtitle then
        Create("TextLabel", {Parent = panel, BackgroundTransparency = 1, Size = UDim2.new(1, -20, 0, 30), Position = UDim2.new(0, 15, 0, 35), Text = subtitle, TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left, TextWrapped = true})
    end
    return panel
end

-- PANEL 1: Historial
local P1 = CreatePanel(200, 10, 210, 220, "Contribution History", "Last 6 months of activity")
local BarFrame = Create("Frame", {Parent = P1, BackgroundTransparency = 1, Size = UDim2.new(1, -30, 0, 100), Position = UDim2.new(0, 15, 0, 70)})
local barHeights = {40, 80, 60, 90, 100, 50}
for i, h in ipairs(barHeights) do
    local bar = Create("Frame", {Parent = BarFrame, BackgroundColor3 = i == 5 and Colors.Accent or Colors.PanelLight, Size = UDim2.new(0, 25, 0, h), Position = UDim2.new(0, (i-1)*35, 0, 100-h), BorderSizePixel = 0})
    AddCorner(bar, 4)
end
local btnReport = Create("TextButton", {Parent = P1, BackgroundColor3 = Colors.Accent, Size = UDim2.new(1, -30, 0, 30), Position = UDim2.new(0, 15, 1, -45), Text = "View Full Report", TextColor3 = Colors.AccentText, Font = Enum.Font.GothamBold, TextSize = 12, BorderSizePixel = 0})
AddCorner(btnReport, 6)

-- PANEL 2: Meta
local P2 = CreatePanel(420, 10, 200, 220, "Set a new milestone", "Define your financial target...")
Create("TextLabel", {Parent = P2, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 60), Size = UDim2.new(1, -30, 0, 15), Text = "Goal Name", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
local Tb1 = Create("TextBox", {Parent = P2, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 75), Size = UDim2.new(1, -30, 0, 25), Text = "e.g. New Car, Home...", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 10, BorderSizePixel = 0, TextXAlignment = Enum.TextXAlignment.Left})
AddCorner(Tb1, 4)
Create("TextLabel", {Parent = P2, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 110), Size = UDim2.new(1, -30, 0, 15), Text = "Target Amount", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
local Tb2 = Create("TextBox", {Parent = P2, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 125), Size = UDim2.new(0.5, -20, 0, 25), Text = "$15,000", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 10, BorderSizePixel = 0, TextXAlignment = Enum.TextXAlignment.Left})
AddCorner(Tb2, 4)
Create("TextLabel", {Parent = P2, BackgroundTransparency = 1, Position = UDim2.new(0.5, 5, 0, 110), Size = UDim2.new(0.5, -20, 0, 15), Text = "Target Date", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
local Tb3 = Create("TextBox", {Parent = P2, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0.5, 5, 0, 125), Size = UDim2.new(0.5, -20, 0, 25), Text = "Dec 2025", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 10, BorderSizePixel = 0, TextXAlignment = Enum.TextXAlignment.Left})
AddCorner(Tb3, 4)
local btnGoal = Create("TextButton", {Parent = P2, BackgroundColor3 = Colors.Accent, Size = UDim2.new(1, -30, 0, 25), Position = UDim2.new(0, 15, 1, -40), Text = "Create Goal", TextColor3 = Colors.AccentText, Font = Enum.Font.GothamBold, TextSize = 11, BorderSizePixel = 0})
AddCorner(btnGoal, 6)

-- PANEL 3: QR
local P3 = CreatePanel(630, 10, 250, 220)
Create("TextLabel", {Parent = P3, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 15), Size = UDim2.new(1, -30, 0, 20), Text = "Scan to connect your mobile device", TextColor3 = Colors.Text, Font = Enum.Font.GothamBold, TextSize = 13, TextXAlignment = Enum.TextXAlignment.Left})
local QRFrame = Create("Frame", {Parent = P3, BackgroundColor3 = Colors.Accent, Position = UDim2.new(0.5, -60, 0, 45), Size = UDim2.new(0, 120, 0, 120), BorderSizePixel = 0})
AddCorner(QRFrame, 8)
for i = 1, 3 do
    for j = 1, 3 do
        if math.random() > 0.3 then
            Create("Frame", {Parent = QRFrame, BackgroundColor3 = Colors.BgDark, Position = UDim2.new(0, 10 + (i-1)*35, 0, 10 + (j-1)*35), Size = UDim2.new(0, 30, 0, 30), BorderSizePixel = 0})
        end
    end
end
Create("TextLabel", {Parent = P3, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 175), Size = UDim2.new(1, -30, 0, 15), Text = "Open the mobile app and scan", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 9, TextXAlignment = Enum.TextXAlignment.Center})

-- PANEL 4: Payout
local P4 = CreatePanel(200, 240, 250, 160, "Payout Threshold", "Set the minimum balance required...")
Create("TextLabel", {Parent = P4, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 60), Size = UDim2.new(0.5, -20, 0, 15), Text = "Preferred Currency", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
local TbCurr = Create("TextLabel", {Parent = P4, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 75), Size = UDim2.new(1, -30, 0, 25), Text = "USD — United States Dollar", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left, BorderSizePixel = 0})
AddCorner(TbCurr, 4)
Create("TextLabel", {Parent = P4, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 110), Size = UDim2.new(0.5, 0, 0, 15), Text = "Min Payout Amount", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
Create("TextLabel", {Parent = P4, BackgroundTransparency = 1, Position = UDim2.new(0.5, 0, 0, 105), Size = UDim2.new(0.5, -15, 0, 20), Text = "$2500.00", TextColor3 = Colors.Text, Font = Enum.Font.GothamBold, TextSize = 14, TextXAlignment = Enum.TextXAlignment.Right})
local SliderBg = Create("Frame", {Parent = P4, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 140), Size = UDim2.new(1, -30, 0, 5), BorderSizePixel = 0})
AddCorner(SliderBg, 3)
local SliderFill = Create("Frame", {Parent = SliderBg, BackgroundColor3 = Colors.Accent, Size = UDim2.new(0.25, 0, 1, 0), BorderSizePixel = 0})
AddCorner(SliderFill, 3)

-- PANEL 5: Balance (Botón de farmeo)
local P5 = CreatePanel(200, 410, 250, 180, "Claimable Balance")
Create("TextLabel", {Parent = P5, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 20), Size = UDim2.new(0.5, 0, 0, 20), Text = "$1,211.29", TextColor3 = Colors.Text, Font = Enum.Font.GothamBold, TextSize = 22, TextXAlignment = Enum.TextXAlignment.Left})
local BoxBal = Create("Frame", {Parent = P5, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 55), Size = UDim2.new(1, -30, 0, 60), BorderSizePixel = 0})
AddCorner(BoxBal, 8)
Create("TextLabel", {Parent = BoxBal, BackgroundTransparency = 1, Position = UDim2.new(0, 10, 0, 10), Size = UDim2.new(0.5, 0, 0, 15), Text = "Net Royalties", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 9, TextXAlignment = Enum.TextXAlignment.Left})
Create("TextLabel", {Parent = BoxBal, BackgroundTransparency = 1, Position = UDim2.new(0.5, -10, 0, 10), Size = UDim2.new(0.5, 0, 0, 15), Text = "$1,248.75", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 9, TextXAlignment = Enum.TextXAlignment.Right})
Create("TextLabel", {Parent = BoxBal, BackgroundTransparency = 1, Position = UDim2.new(0, 10, 0, 35), Size = UDim2.new(0.5, 0, 0, 15), Text = "Processing Fee", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 9, TextXAlignment = Enum.TextXAlignment.Left})
Create("TextLabel", {Parent = BoxBal, BackgroundTransparency = 1, Position = UDim2.new(0.5, -10, 0, 35), Size = UDim2.new(0.5, 0, 0, 15), Text = "-$37.46", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 9, TextXAlignment = Enum.TextXAlignment.Right})

-- AQUI SE NOMBRA "StartBtn" PARA QUE EL SCRIPT PRINCIPAL LO ENCUENTRE
local StartBtn = Create("TextButton", {Name = "StartBtn", Parent = P5, BackgroundColor3 = Colors.Accent, Size = UDim2.new(1, -30, 0, 35), Position = UDim2.new(0, 15, 1, -50), Text = "Iniciar Farmeo", TextColor3 = Colors.AccentText, Font = Enum.Font.GothamBold, TextSize = 12, BorderSizePixel = 0})
AddCorner(StartBtn, 6)

-- PANEL 6: Notificaciones
local P6 = CreatePanel(470, 410, 180, 180, "Notifications", "Choose which alerts you want...")
local function CreateToggle(y, text, active)
    local tBg = Create("Frame", {Parent = P6, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, y), Size = UDim2.new(0, 20, 0, 20), BorderSizePixel = 0})
    AddCorner(tBg, 4)
    if active then
        local fill = Create("Frame", {Parent = tBg, BackgroundColor3 = Colors.Accent, Position = UDim2.new(0, 2, 0, 2), Size = UDim2.new(0, 16, 0, 16), BorderSizePixel = 0})
        AddCorner(fill, 3)
    end
    Create("TextLabel", {Parent = P6, BackgroundTransparency = 1, Position = UDim2.new(0, 45, 0, y), Size = UDim2.new(1, -55, 0, 20), Text = text, TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
end
CreateToggle(60, "Transaction alerts", true)
CreateToggle(90, "Security alerts", true)
CreateToggle(120, "Goal milestones", false)
CreateToggle(150, "Market updates", false)

-- PANEL 7: Analytics
local P7 = CreatePanel(670, 410, 210, 180, "Analytics")
local btnView = Create("TextButton", {Parent = P7, BackgroundColor3 = Colors.BgDark, Position = UDim2.new(1, -80, 0, 15), Size = UDim2.new(0, 60, 0, 20), Text = "View Analytics", TextColor3 = Colors.Text, Font = Enum.Font.GothamBold, TextSize = 9, BorderSizePixel = 0, AutoButtonColor = false})
AddCorner(btnView, 10)
Create("TextLabel", {Parent = P7, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 0, 45), Size = UDim2.new(1, -30, 0, 40), Text = "418.2K Visitors", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 14, TextXAlignment = Enum.TextXAlignment.Left})
Create("TextLabel", {Parent = P7, BackgroundTransparency = 1, Position = UDim2.new(0, 100, 0, 45), Size = UDim2.new(1, -100, 0, 40), Text = "+10%", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 10, TextXAlignment = Enum.TextXAlignment.Left})
local LineBg = Create("Frame", {Parent = P7, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 15, 0, 90), Size = UDim2.new(1, -30, 0, 70), BorderSizePixel = 0})
AddCorner(LineBg, 8)
Create("Frame", {Parent = LineBg, BackgroundColor3 = Colors.Accent, Position = UDim2.new(0, 10, 0, 40), Size = UDim2.new(0, 50, 0, 2), BorderSizePixel = 0})
Create("Frame", {Parent = LineBg, BackgroundColor3 = Colors.Accent, Position = UDim2.new(0, 60, 0, 20), Size = UDim2.new(0, 40, 0, 2), BorderSizePixel = 0})
Create("Frame", {Parent = LineBg, BackgroundColor3 = Colors.Accent, Position = UDim2.new(0, 100, 0, 50), Size = UDim2.new(0, 40, 0, 2), BorderSizePixel = 0})

-- CONTROL DE VELOCIDAD EN EL SIDEBAR
local SpeedFrame = Create("Frame", {Parent = Sidebar, BackgroundTransparency = 1, Position = UDim2.new(0, 0, 0, catY), Size = UDim2.new(1, 0, 0, 60)})
Create("TextLabel", {Parent = SpeedFrame, BackgroundTransparency = 1, Size = UDim2.new(1, 0, 0, 20), Text = "Velocidad de Farmeo", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 11, TextXAlignment = Enum.TextXAlignment.Left})
-- AQUI SE NOMBRA "SpeedBox" PARA QUE EL SCRIPT PRINCIPAL LO ENCUENTRE
local SpeedInput = Create("TextBox", {Name = "SpeedBox", Parent = SpeedFrame, BackgroundColor3 = Colors.PanelLight, Position = UDim2.new(0, 0, 0, 25), Size = UDim2.new(1, 0, 0, 25), Text = "45", TextColor3 = Colors.Text, Font = Enum.Font.Gotham, TextSize = 12, BorderSizePixel = 0})
AddCorner(SpeedInput, 6)

-- TEXTO DE ESTADO
local StatusTxt = Create("TextLabel", {Name = "StatusTxt", Parent = MainApp, BackgroundTransparency = 1, Position = UDim2.new(0, 15, 1, -20), Size = UDim2.new(1, -30, 0, 20), Text = "Estado: Inactivo", TextColor3 = Colors.TextDim, Font = Enum.Font.Gotham, TextSize = 12, TextXAlignment = Enum.TextXAlignment.Left})
